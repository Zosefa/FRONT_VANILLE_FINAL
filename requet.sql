SELECT * 
FROM vanille v
LEFT JOIN disponible d ON v.id_vanille = d.idvanille
WHERE d.idvanille IS NULL;
