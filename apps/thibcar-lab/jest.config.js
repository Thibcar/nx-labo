module.exports = {
  name: 'thibcar-lab',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/thibcar-lab',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
