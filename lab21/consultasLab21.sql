--1 La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

SELECT SUM(cantidad) as 'Total Unidades' , SUM(cantidad* (costo + costo * PorcentajeImpuesto)) as 'Importe total'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave

/*
Total Unidades   Importe total
48262.00		36705084.740000
*/

--2 code Para cada proveedor, obtener la raz�n social del proveedor, 
--n�mero de entregas e importe total de las entregas realizadas.
 
SELECT RazonSocial, COUNT(Numero) as 'Numero de entregas', SUM(Cantidad * (Costo + (Costo*PorcentajeImpuesto/100))) as 'Importe total de entregas'
FROM Proveedores P, Entregan E, Materiales M
WHERE P.RFC=E.RFC AND E.Clave=M.Clave
GROUP BY RazonSocial

/* Resultados consulta 1 
Alvin	15	794295.2064000000
Cecoferre	18	860441.9770000000
Comex	15	801930.5980000000
La Ferre	18	919531.4300000000
La fragua	18	2301675.6920000000
Oviedo	18	1059888.7370000000
Tabiquera del centro	15	1937798.7240000000
Tubasa	15	2278398.9930000000
*/


--3 code Por cada material obtener la clave y descripci�n del material, la cantidad total entregada, 
--la m�nima cantidad entregada, la m�xima cantidad entregada, el importe total de las entregas de aquellos 
--materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT * from Materiales
SELECT * FROM Entregan
-- El alias de material es M


SELECT E.Clave, AVG( Cantidad) as 'PromedioEntregas'
from Entregan as E, Materiales as M 
GROUP by E.Clave
HAVING AVG(Cantidad) > 400


SELECT E.Clave, descripcion, SUM(cantidad) as 'Cantidad total entregada', MIN(cantidad) as 'Minima cantidad agregada' , MAX(cantidad) as 'Maxima cantidad entrega',  SUM(cantidad* (costo + costo * PorcentajeImpuesto)) as 'Importe total'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave  
GROUP BY E.Clave, Descripcion 
HAVING AVG(E.Cantidad) > 400
/*

1100	Block	1688.00	466.00	699.00	162048.000000
1140	Cantera blanca	1453.00	219.00	651.00	953168.000000
1250	Grava	1452.00	71.00	691.00	508200.000000
*/



--HAVING AVG(  SUM(cantidad* (costo + costo * PorcentajeImpuesto))) 

--4 code Para cada proveedor, indicar su raz�n social y mostrar la cantidad promedio de cada material entregado, 
--detallando la clave y descripci�n del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT RazonSocial, M.Clave, descripcion, AVG(Cantidad) as 'Promedio de entrega'
FROM Entregan E, Proveedores P, Materiales M
WHERE P.RFC=E.RFC AND E.Clave=M.Clave
GROUP BY RazonSocial, M.Clave, descripcion
HAVING AVG(Cantidad)>500
ORDER BY RazonSocial DESC, [Promedio de entrega] DESC

/*
Oviedo	1010	Varilla 4/32	572.666666
Oviedo	1410	Pintura B1021	509.666666
La Ferre	1100	Block	562.666666
*/

--5 code Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos
--grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 
--y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT RazonSocial, M.Clave, descripcion, AVG(Cantidad) as 'Promedio de entrega'
FROM Entregan E, Proveedores P, Materiales M
WHERE P.RFC=E.RFC AND E.Clave=M.Clave
GROUP BY RazonSocial, M.Clave, descripcion
HAVING AVG(Cantidad) not between 370 and 450
ORDER BY RazonSocial DESC, [Promedio de entrega] DESC

/*
Tubasa	1070	Varilla 4/35	340.333333
Tubasa	1230	Cemento 	319.000000
Tubasa	1310	Tuber�a 3.6	244.666666
Tabiquera del centro	1140	Cantera blanca	484.333333
Tabiquera del centro	1300	Tuber�a 4.3	365.666666
Tabiquera del centro	1380	Pintura C1011	364.666666
Tabiquera del centro	1060	Varilla 3/19	354.333333
Oviedo	1010	Varilla 4/32	572.666666
*/

--6 code Clave y descripci�n de los materiales que nunca han sido entregados.

SELECT Clave, Descripcion
FROM Materiales
WHERE clave not in(SELECT clave FROM Entregan)


--7 code Raz�n social de los proveedores que han realizado entregas 
--tanto al proyecto 'Vamos M�xico' como al proyecto 'Quer�taro Limpio'.
SELECT * FROM Entregan

CREATE VIEW Prov_VamosMexico as (SELECT Denominacion, E.RFC, RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan as E
WHERE Denominacion LIKE '%Vamos %' And E.RFC=PO.RFC 
AND PY.Numero=E.Numero )
 
SELECT * FROM Prov_VamosMexico

CREATE VIEW Prov_QueretaroLimpio as (SELECT Denominacion, E.RFC, RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan as E
WHERE Denominacion LIKE '%Queretaro %' And E.RFC=PO.RFC 
AND PY.Numero=E.Numero )

SELECT RazonSocial FROM Prov_QueretaroLimpio
Intersect
SELECT RazonSocial FROM Prov_VamosMexico

/*
La fragua
*/


--8 code Descripci�n de los materiales que nunca
--han sido entregados al proyecto 'CIT Yucat�n'.
SELECT Clave, Descripcion
FROM Materiales
WHERE clave not in(SELECT clave
FROM Entregan, Proveedores
WHERE Entregan.RFC=Proveedores.RFC and RazonSocial='CIT Yucat�n')


--9code Raz�n social y promedio de cantidad entregada de los proveedores cuyo 
--promedio de cantidad entregada es mayor al promedio de la cantidad 
--entregada por el proveedor con el RFC 'VAGO780901'.
SELECT RazonSocial, AVG(Cantidad) as 'Promedio de entrega'
FROM Entregan E, Proveedores P
WHERE P.RFC=E.RFC 
GROUP BY RazonSocial
HAVING AVG(Cantidad)> (SELECT AVG(Cantidad) FROM Entregan E, Proveedores P WHERE P.RFC = E.RFC AND P.RFC='VAGO780901' )
ORDER BY RazonSocial DESC, [Promedio de entrega] DESC


--10 code RFC, raz�n social de los proveedores que participaron en el proyecto 
--'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 
--fueron mayores a las cantidades totales entregadas en el 2001.

CREATE VIEW C2001 AS SELECT Prv.RFC, RazonSocial, SUM(cantidad) as 'Cantidad entregada 2001'
FROM Proyectos Pyt, Proveedores Prv, Entregan E
WHERE Pyt.Numero=E.Numero and Prv.RFC=E.RFC and Fecha>'31/12/2000' and Fecha<'01/01/2002' and Denominaci�n='Infonavit Durango'
group by RazonSocial, Prv.RFC


CREATE VIEW C2000 AS SELECT Prv.RFC, RazonSocial, SUM(cantidad) as 'Cantidad entregada 2000'
FROM Proyectos Pyt, Proveedores Prv, Entregan E
WHERE Pyt.Numero=E.Numero and Prv.RFC=E.RFC and Fecha>'31/12/1999' and Fecha<'01/01/2001' and Denominaci�n='Infonavit Durango'
group by RazonSocial, Prv.RFC

select C2000.RFC, C2000.RazonSocial from C2001, C2000
WHERE C2000.RFC=C2001.RFC AND [Cantidad entregada 2000]>[Cantidad entregada 2001]

/* La consulta no muesta ningun resultado debido a que no hubo un proveedor que particiapara en el proyecto Infonavit Durango en ambos a�os*/

