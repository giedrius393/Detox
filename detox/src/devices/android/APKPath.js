const path = require('path');
const _ = require('lodash');
const string = require('../../utils/string');

class APKPath {

  static getTestApkPath(originalApkPath) {
    const originalApkPathObj = path.parse(originalApkPath);
    const splitFileName = originalApkPathObj.name.split('-');
    const buildType = _.last(splitFileName);
    const testApkPath = path.join(originalApkPathObj.dir, 'androidTest', buildType, `app-${buildType}-androidTest${originalApkPathObj.ext}`);
    
    return testApkPath;
  }
}

module.exports = APKPath;
