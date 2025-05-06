import db from "../src/db/postgres.js";

export const findPsicologosPaciente = async ({
  nombre,
  consulta_online,
  especialidad_id,
  limit,
  offset,
}) => {
  const filters = [];
  const values = [];
  let idx = 1;

  if (nombre) {
    filters.push(
      `LOWER(CONCAT(p.nombre, ' ', p.apellidop, ' ', p.apellidom)) LIKE $${idx}`
    );
    values.push(`%${nombre.toLowerCase()}%`);
    idx++;
  }

  if (consulta_online) {
    filters.push(`p.consulta_online = $${idx}`);
    values.push(consulta_online === "true");
    idx++;
  }

  const especialidades = Array.isArray(especialidad_id)
    ? especialidad_id.map(Number)
    : especialidad_id
    ? [Number(especialidad_id)]
    : [];

  if (especialidades.length > 0) {
    filters.push(`ep.idespecialidad = ANY ($${idx})`);
    values.push(especialidades);
    idx++;
  }

  const whereClause =
    filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";

  const query = `
    SELECT
      p.idpsicologo,
      p.nombre,
      p.apellidop,
      p.apellidom,
      p.dni,
      p.foto,
      p.descripcion,
      p.consulta_online,
      json_agg(DISTINCT jsonb_build_object(
        'id', e.idespecialidad,
        'nombre', e.nombre
      )) FILTER (WHERE e.idespecialidad IS NOT NULL) AS especialidades
    FROM psicologo p
    LEFT JOIN especialidad_psicologo ep ON p.idpsicologo = ep.idpsicologo
    LEFT JOIN especialidad e ON ep.idespecialidad = e.idespecialidad
    ${whereClause}
    GROUP BY p.idpsicologo
    ORDER BY p.nombre
    LIMIT $${idx} OFFSET $${idx + 1}
  `;

  const results = await db.any(query, [...values, limit, offset]);

  const countQuery = `
      SELECT COUNT(DISTINCT p.idpsicologo) AS total
      FROM psicologo p
      LEFT JOIN especialidad_psicologo ep ON p.idpsicologo = ep.idpsicologo
      LEFT JOIN especialidad e ON ep.idespecialidad = e.idespecialidad
      ${whereClause}
    `;

  const countResult = await db.one(countQuery, values);

  return {
    data: results,
    total: Number(countResult.total),
  };
};
