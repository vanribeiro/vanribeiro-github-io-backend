function dateConvert(value: string) {
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR');
}

export default dateConvert;