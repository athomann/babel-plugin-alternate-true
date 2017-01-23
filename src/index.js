export default function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === true) {
          path.replaceWith(t.booleanLiteral(true));
        }

        if (path.node.name === 'alternateTrue') {
          path.replaceWith(t.booleanLiteral(false));
        }
      }
    }
  };
}
