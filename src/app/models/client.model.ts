export class ClientModel {
    id: number;
    name: string;
    reason: string;
    region: string;
    country: string;

    constructor(model: any) {
        this.id = model.id;
        this.reason = model.razon;
        this.name = model.nombre;
        this.region = model.region;
        this.country = model.pais;
    }
}
