export class RecipeModel{
    id = -1;
    title = "";
    image = "";

    constructor(mId: number, mTitle: string, mImage: string){
        this.id = mId;
        this.title = mTitle;
        this.image = mImage;
    }
}