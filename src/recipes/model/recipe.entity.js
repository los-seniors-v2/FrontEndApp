export class Recipe {
    constructor(id, name, calories, fat_total_g, carb_g, protein_g, image) {
        this.id = id;
        this.name = name;
        this.calories = calories;
        this.fat_total_g = fat_total_g;
        this.carb_g = carb_g;
        this.protein_g = protein_g;
        this.image = image;
    }
}