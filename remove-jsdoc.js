export default function () {
  return {
    visitor: {
      Program(path) {
        path.traverse({
          enter(path) {
            const { leadingComments } = path.node;
            if (leadingComments) {
              path.node.leadingComments = leadingComments.filter(
                (comment) => !comment.value.startsWith('*')
              );
            }
          },
        });
      },
    },
  };
}
