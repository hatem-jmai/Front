export class TableauSuivi{	
    id_dossier :number;
    date_arrive_visite :string;
    date_deb :string;
    date_fin :string;
    sujet :string;
    nature:string;
    type_visite:string;
    nbr_participant_ins:number;
    nbr_participant_sp:number;
    frais_transport:boolean;
    frais_residence:boolean;
    pays_destination_lib:string;
    ville:string;
    organisme_etranger_lib:string;
    cadre_participe=[];
    id_cadre:number;
    nom:string;
    prenom:string;
    grade:string;
    fonction:string;
    direction:string;
    objectif_visite:string;
    constructor(){}

}