const cityTransformerForSearchBox = (cities) => {
    return cities.map(city=>({
        key: city.id,
        value: `${city.name},${city.country}`
    }))
}

export { cityTransformerForSearchBox }