export type Ingredient = {
    id: string,
    name: string,
    ratio: number,
}

export type Yields = {
    unitWeight: number,
    unitQuantity: number,
    wasteFactor: number,
}

export type Formula = {
    flours: Ingredient[],
    ingredients: Ingredient[],
}

export type Preferment = {
    id: string,
    name: string,
    prefermentedFlourRatio: number,
    fermentation: {
        time: number,
        temperature: number,
    }
    formula: Formula,
}

export type Process = {
    mix: {
        method: "short" | "improved" | "intensive",
        notes?: string,
    },
    ddt: number,
    bulkFermentationTime: number,
    preshape: {
        time: number,
        shape: string,
    },
    finalProof: {
        time: number,
        temp: number,
    },
    shape: string, //TODO rename to finalshape
    bake?: BakeItem[]
    fry?: {
        time: number,
        temp: number,
    }
}

export type BakeItem = {
    id: string,
    time: number,
    temp: number,
};

export type Recipe = {
    id: string,
    title: string,
    description: string,
    image?: string, // for now just link to placeholder images in assests folder
    author: string,
    tags?: string[],
    yields: Yields,
    process: Process,
    formula: Formula,
    preferments?: Preferment[],
    notes?: string,
    // eventually: soakers, instructions, proofing times, etc
}
