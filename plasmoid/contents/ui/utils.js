function get_root() {
    // The plasmoid.file method seems to be missing, so this workaround was used
    var path = plasmoid.metaData.fileName
    path = path.split('/')
    path[path.length - 1] = 'contents'
    return path.join('/')
}

function get_scripts_root() {
    return get_root() + '/scripts'
}

function chdir_scripts_root() {
    return 'cd "'+get_scripts_root()+'";'
}

function random(seed) {
    var x = Math.sin(seed*1000) * 10000;
    return x - Math.floor(x);
}
