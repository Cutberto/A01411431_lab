BULK INSERT a1411431.a1411431.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
	  

BULK INSERT a1411431.a1411431.[Proyectos]
   FROM 'e:\wwwroot\rcortese\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
	  
BULK INSERT a1411431.a1411431.[Proveedores]
   FROM 'e:\wwwroot\rcortese\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
	  
SET DATEFORMAT dmy
BULK INSERT a1411431.a1411431.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
	
	
ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
 ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
 ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
 ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)


INSERT INTO Materiales values(1000, 'xxx', 1000)

 sp_helpconstraint Materiales
 sp_helpconstraint Proveedores
 sp_helpconstraint Proyectos
 sp_helpconstraint Entregan

ALTER TABLE Materiales drop constraint llaveMateriales

SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Proyectos
SELECT * FROM Entregan

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ;
DELETE FROM Entregan WHERE Clave = 0

ALTER TABLE entregan add constraint cfentreganclave foreign key (clave) references materiales(clave);
ALTER TABLE entregan add constraint cfentreganRFC foreign key (RFC) references Proveedores(RFC);
ALTER TABLE entregan add constraint cfentregannumero foreign key (Numero) references Proyectos(Numero);

sp_helpconstraint Materiales

INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
   
Delete from Entregan where Cantidad = 0
   
ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;
