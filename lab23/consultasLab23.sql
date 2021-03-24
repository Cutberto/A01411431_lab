
            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaMaterial' AND type = 'P')
                DROP PROCEDURE creaMaterial
            GO

            CREATE PROCEDURE creaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2),
                @uimpuesto NUMERIC(6,2)
            AS
                INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto, @uimpuesto)
            GO


/* 
En tu reporte de este laboratorio, contesta las siguientes preguntas:

¿Qué hace el primer bloque del código (bloque del IF)?
Revisa si el procedimineto ya existía previamente y si sí, lo elimina 
para evitar errores en la siguiente parte del código

¿Para qué sirve la instrucción GO?
Para ejecutar las instrucciones que se encuentran a continuación

¿Explica que recibe como parámetro este Procedimiento y qué tabla modifica?
Recibe como parámetros la clave, descripcion, costo, impuesto y los inserta
en la tabla Materiales

*/

EXECUTE creaMaterial 5000,'Martillos Acme',250,15


--Por analogía crea procedimientos almacenados con los siguientes objetivos:

/*modificaMaterial que permite modificar un material que reciba como parámetros
las columnas de la tabla materiales y actualice las columnas correspondientes 
con los valores recibidos, para el registro cuya llave sea la clave que se 
recibe como parámetro.*/
            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaMaterial' AND type = 'P')
                DROP PROCEDURE modificaMaterial
            GO

            CREATE PROCEDURE modificaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2),
                @uimpuesto NUMERIC(6,2)
            AS
				UPDATE Materiales 
				SET Descripcion = @udescripcion, Costo = @ucosto, PorcentajeImpuesto= @uimpuesto
                WHERE Clave = @uclave
            GO



/*eliminaMaterial que elimina el registro de la tabla materiales cuya llave sea la 
clave que se recibe como parámetro.*/
            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaMaterial' AND type = 'P')
                DROP PROCEDURE eliminaMaterial
            GO

            CREATE PROCEDURE eliminaMaterial
                @uclave NUMERIC(5,0)
                
            AS
				DELETE FROM Materiales WHERE Clave = @uclave 
            GO


/*Desarrollar los procedimientos (almacenados) creaProyecto , modificaproyecto y 
eliminaproyecto, hacer lo mismo para las tablas proveedores y entregan.*/


--Proveedores

            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProveedores' AND type = 'P')
                DROP PROCEDURE creaProveedores
            GO

            CREATE PROCEDURE creaProveedores
                @urfc char(13),
                @urazonsocial VARCHAR(50)               
            AS
                INSERT INTO Proveedores VALUES(@urfc, @urazonsocial)
            GO

            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaProveedores' AND type = 'P')
                DROP PROCEDURE modificaProveedores
            GO

            CREATE PROCEDURE modificaProveedores
                @urfc char(13),
                @urazonsocial VARCHAR(50)
				AS
				UPDATE Proveedores 
				SET RazonSocial=@urazonsocial
                WHERE RFC = @urfc
				GO


            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaProveedores' AND type = 'P')
                DROP PROCEDURE eliminaProveedores
            GO

            CREATE PROCEDURE eliminaProveedores
                @urfc char(13)
                
            AS
				DELETE FROM Proveedores WHERE RFC = @urfc 
            GO



	--Entregan
	            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaEntregan' AND type = 'P')
                DROP PROCEDURE creaEntregan
            GO

            CREATE PROCEDURE creaEntregan
                @uclave NUMERIC (5),
				@urfc CHAR(13),
				@unumero NUMERIC(5),
                @ufecha DATE,
				@ucantidad NUMERIC (8,2)
            AS
                INSERT INTO Entregan VALUES(@uclave, @urfc, @unumero, @ufecha,  @ucantidad)
            GO

            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaEntregan' AND type = 'P')
                DROP PROCEDURE modificaEntregan
            GO

            CREATE PROCEDURE modificaEntregan
                @uclave NUMERIC (5),
				@urfc CHAR(13),
				@unumero NUMERIC(5),
                @ufecha DATE,
				@ucantidad NUMERIC (8,2)
				AS
				UPDATE Entregan 
				SET Clave = @uclave, RFC = @urfc, Numero = @unumero
                WHERE Fecha = @unumero AND Cantidad = @ucantidad
				GO


            IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaEntregan' AND type = 'P')
                DROP PROCEDURE eliminaEntregan
            GO

            CREATE PROCEDURE eliminaEntregan
                        
                @ufecha DATE,
				@ucantidad NUMERIC (8,2)
                
            AS
				DELETE FROM Entregan WHERE Fecha = @ufecha AND Cantidad = @ucantidad 
            GO

--Define el siguiente stored procedure en tu base de datos
	 IF EXISTS (SELECT name FROM sysobjects
                                       WHERE name = 'queryMaterial' AND type = 'P')
                                DROP PROCEDURE queryMaterial
                            GO

                            CREATE PROCEDURE queryMaterial
                                @udescripcion VARCHAR(50),
                                @ucosto NUMERIC(8,2)

                            AS
                                SELECT * FROM Materiales WHERE descripcion
                                LIKE '%'+@udescripcion+'%' AND costo > @ucosto
                            GO
      
--Ejecútalo con la siguiente instrucción:

EXECUTE queryMaterial 'Lad',20

/*Explica en tu reporte qué recibe como parámetro este procedimiento y qué hace.

Recibe como parámetro la descripción de un material y su costo y realiza una consulta que busca 
en la base de datos cuales materiales tienen una descipcion similar y un costo mayor al costo dado

1080	Ladrillos rojos	50.00	2.16
1090	Ladrillos grises	35.00	2.18

*/