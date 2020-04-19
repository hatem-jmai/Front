export class Dossier{	
    id :number;
    date_arrive_invitation :string;
    date_deb :string;
    date_fin :string;
    date_limite_reponce:string;
    sujet :string;
    nature:string;
    statut:string;
    langues:string;
    annee :number;
    type_visite:string;
    nbr_participant_ins:number;
    nbr_participant_sp:number;
    frais_transport:boolean;
    frais_residence:boolean;
    constructor(){}
    
}