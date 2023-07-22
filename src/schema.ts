export const categoryValues = ["dinner", "baking", "extras"] as const;
const categoryLabels = {
    "dinner": "Dinner",
    "baking": "Baking",
    "extras": "Extras"
}
export const categories = categoryValues.map(value => {
    return {
        value: value,
        label: categoryLabels[value]
    }
});

export const complexityValues = ["quick", "medium", "longer"] as const;
const complexityLabels = {
    "quick": "Quick",
    "medium": "Medium",
    "longer": "Longer"
}
export const complexities = complexityValues.map(value => {
    return {
        value: value,
        label: complexityLabels[value]
    }
});