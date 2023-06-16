export class Domicilio {
    id!: number;
    localidad!: {
      id: number;
      provincia: {
        id: number;
        pais: {
          id: number;
          nombre: string;
        };
        nombre: string;
      };
      nombre: string;
    };
    calle!: string;
    numero!: number;
    departamento!: string;
    codigo_postal!: string;
    url_maps!: string;
  }