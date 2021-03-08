BULK INSERT a1411431.a1411431.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT a1411431.a1411431.[Proyectos]
  FROM 'e:\wwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT a1411431.a1411431.[Proveedores]
  FROM 'e:\wwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

SET DATEFORMAT dmy 
BULK INSERT a1411431.a1411431.[Entregan]
  FROM 'e:\wwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

