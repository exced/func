const Z = f => v => f(Z(f))(v)

export default Z