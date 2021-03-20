select * from materiales

select * from materiales
where clave=1000

select clave,rfc,fecha from entregan

select * from materiales,entregan
where materiales.clave = entregan.clave

select * from entregan,proyectos
where entregan.numero < = proyectos.numero

(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300)

select * from entregan where clave=1450 or clave=1300

(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018)


(select * from entregan)
except
(select * from entregan where clave=1000)

select * from entregan,materiales

set dateformat dmy
SELECT descripcion
FROM Materiales as M, Entregan as E
WHERE M.clave=E.Clave 
AND Fecha<'01/01/2001'
AND Fecha>'31/12/1999'

set dateformat dmy
SELECT distinct descripcion
FROM Materiales as M, Entregan as E
WHERE M.clave=E.Clave 
AND Fecha<'01/01/2001'
AND Fecha>'31/12/1999'

SELECT P.Numero, Denominacion, fecha, Cantidad
FROM Proyectos as P, Entregan as E
WHERE P.Numero=E.Numero
ORDER BY P.Numero, Fecha DESC

SELECT * FROM Materiales where Descripcion LIKE 'Si%'

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';


SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
Exists ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

 
SELECT TOP 2 * FROM Proyectos

 
SELECT TOP Numero FROM Proyectos

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

SELECT M.clave, descripcion
from Materiales as M, Proyectos AS P, Entregan AS E
WHERE M.clave=E.clave AND E.Numero=P.Numero
AND Denominacion='Mexico sin ti no estamos completos'

SELECT M.clave, descripcion
from Materiales AS M, Proveedores AS P, Entregan AS E
WHERE RazonSocial = 'Acme tools' AND
M.clave=E.clave AND E.RFC=P.RFC


set dateformat dmy
SELECT P.RFC, AVG(cantidad) as Entregas_Promedio
from Proveedores as P, Entregan as E
WHERE P.RFC=E.RFC
 AND Fecha<'01/01/2001'  AND Fecha>'31/12/1999'
GROUP BY P.RFC
HAVING AVG(cantidad)>=300

SELECT descripcion, SUM(Cantidad) as Total
FROM Materiales as M, Entregan AS E
WHERE M.clave=E.Clave
AND Fecha > '31/12/1999' AND Fecha<'01/01/2001'
Group By Descripcion



Create view conteo_claves as
SELECT clave, COUNT(clave) as veces
FROM Entregan as E 
WHERE E.Fecha BETWEEN '01/01/2001' and '21/12/2001' 
GROUP BY clave	

select * from conteo_claves

SELECT clave  
FROM conteo_claves 
WHERE veces = (SELECT MAX(veces) from conteo_claves)

SELECT descripcion 
FROM Materiales 
WHERE Descripcion LIKE '%ub%'

SELECT	P.Denominacion, (E.cantidad * M.costo) as Total_a_pagar
FROM Materiales AS M, Entregan as E, Proyectos as P
WHERE M.clave = E.clave AND P.Numero = E.Numero

CREATE VIEW Total_a_pagar as SELECT Denominacion, (cantidad*costo) as total
FROM Proyectos as P, Entregan as E, Materiales as M
WHERE P.Numero=E.Numero AND E.Clave=M.Clave

Select * from Total_a_pagar

CREATE VIEW Prov_Televisa as (SELECT Denominacion, E.RFC, RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan as E
WHERE Denominacion LIKE '%Televisa%' And E.RFC=PO.RFC 
AND PY.Numero=E.Numero )

CREATE VIEW Prov_Coahuila as (SELECT RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan AS E
WHERE PY.Numero=E.Numero And E.RFC=PO.RFC
AND Denominacion LIKE '%Educando en Coahuila%')

SELECT Prov_Televisa.Denominacion, Prov_Televisa.RFC, Prov_Televisa.RazonSocial
FROM Prov_Televisa, Prov_Coahuila
WHERE Prov_Televisa.RazonSocial	NOT IN (Prov_Coahuila.RazonSocial)


SELECT Denominacion, E.RFC, RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan as E
WHERE Denominacion LIKE '%Televisa%' And E.RFC=PO.RFC 
AND PY.Numero=E.Numero 
EXCEPT
SELECT Denominacion, E.RFC, RazonSocial
FROM Proyectos AS PY, Proveedores AS PO, Entregan AS E
WHERE PY.Numero=E.Numero And E.RFC=PO.RFC
AND Denominacion LIKE '%Educando en Coahuila%'

SELECT M.costo, M.Descripcion 
FROM Entregan as E, Proyectos as P, Materiales as M
WHERE M.Clave = E.Clave AND P.Numero = E.Numero
AND E.RFC IN (SELECT RFC FROM Prov_Coahuila) 

SELECT  Descripcion, Cantidad, (Cantidad*Costo) as Total
FROM Proyectos, Entregan, Materiales
WHERE Proyectos.Numero=Entregan.Numero AND Entregan.Clave=Materiales.Clave


