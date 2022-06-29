export const artistsResolver = {
  artists: (parent, args, context) => {
    console.log(parent, args, context);
    return [
      { id: 1, firstName: 'John', secondName: 'Smith' },
      { id: 2, firstName: 'John', secondName: 'Smith' },
      { id: 3, firstName: 'John', secondName: 'Smith' },
    ];
  },
};
