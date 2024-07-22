/**
 * Converts a string or number value to a localized date string in the format 'dd/mm/yyyy'.
 * @param value - The value to convert to a date string.
 * @returns The localized date string in the format 'dd/mm/yyyy'.
 */
function dateConvert(value: string | number) {
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR');
}

export default dateConvert;