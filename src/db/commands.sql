-- docker run --rm -p 5435:5432 --name some-postgres -e POSTGRES_PASSWORD=12345678 -v /home/rjardim/development/postgres-database:/var/lib/postgresql/data -d postgres

-- Inserir 2 setores exemplo
INSERT INTO public.sectors
("name", "createdAt", "updatedAt")
VALUES('Produção', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public.sectors
("name", "createdAt", "updatedAt")
VALUES('Produção', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Inserir 2 locations

INSERT INTO public.locations
("name", "createdAt", "updatedAt", "sectorId")
VALUES('área leste', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);


INSERT INTO public.locations
("name", "createdAt", "updatedAt", "sectorId")
VALUES('área sul', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4);
