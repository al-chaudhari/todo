const path = require('path'), home = require('os').homedir(),
  doit_path = path.join(home, '.doit'),
  doit_profile = path.join(doit_path, 'profile.json'),
  doit_projects = path.join(doit_path, 'project.json')

module.exports = {
    home: home,
    doit_path: doit_path,
    doit_profile: doit_profile,
    doit_projects: doit_projects
}