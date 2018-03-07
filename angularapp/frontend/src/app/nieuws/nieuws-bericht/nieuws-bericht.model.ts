export class NieuwsBericht {
    private _datumToegevoegd: Date;
    private _titel: string;
    private _bericht: string;
    private _auteur: string;

    ///CONSTRUCTOR
    constructor(titel: string, bericht: string, auteur: string){
        this._auteur = auteur;
        this._titel = titel;
        this._bericht = bericht;
        this._datumToegevoegd = new Date();
    }

    //GETTERS
    get auteur(): string{
        return this._auteur;
    }
    get titel(): string{
        return this._titel;
    }
    get bericht(): string{
        return this._bericht;
    }
    get datumToegevoegd(): Date{
        return this._datumToegevoegd;
    }
    
}
