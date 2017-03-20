#! /usr/bin/env node

var program = require('commander');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

ncp.limit = 16;

program
    .version('0.0.1')
    .option('-i, --install [comp]', 'install component')
    .parse(process.argv);

function MSG_FATAL(msg) {
    console.error('ERROR: ' + (msg || 'nothing'));
}

function MSG_SUCC(msg) {
    console.log(msg || 'nothing');
}

function install_component(comp) {
    // 解析文件夹地址
    component_folder_path = path.resolve(__dirname, '../component/' + comp);
    target_folder_path = path.resolve(process.cwd(), './app/component/' + comp);
    component_path = path.resolve(component_folder_path, 'index.js');
    target_path = path.resolve(target_folder_path, 'index.js');
    deps_path = path.resolve(component_folder_path, 'deps.json');

    // 找到文件
    if (!fs.existsSync(component_path)
        || !fs.existsSync(deps_path)) {
        MSG_FATAL('No such component\n');
        return;
    }

    deps_config = JSON.parse(fs.readFileSync(deps_path));
    deps_config_array = deps_config.deps;

    // 在当前目录下创建文件夹
    // 递归创建组件目录
    mkdirp(target_folder_path, function(err) {
        if (err) {
            MSG_FATAL(err)
        } else {

            // 拷贝文件
            // 如果本地有该文件，直接覆盖
            ncp(component_folder_path, target_folder_path, function(err) {
                if (err) {
                    return MSG_FATAL(err);
                }
                // 递归安装依赖组件库
                deps_config_array.map(function (item, idx) {
                    install_component(item);            
                });
                // 成功安装本依赖库
                MSG_SUCC('Install [ ' + comp + ' ] done!');
            });

        }
    });
}

if (program.install) {
    install_component(program.install);
} else {
    MSG_FATAL('not install');
}
