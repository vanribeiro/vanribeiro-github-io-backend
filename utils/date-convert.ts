function dateConvert(value: string | number) {
    const date = new Date(value);
    return date.toLocaleDateString('pt-BR');
}

export default dateConvert;