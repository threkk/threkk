#!/usr/bin/env node

const os = require('os')
const process = require('process')
const path = require('path')

const user = os.userInfo().username
const node = process.argv[0]
const dir = path.join(path.dirname(process.argv[1]), '..')
const next = path.join(dir, './node_modules/.bin/next')

const service = `
[Unit]
Description=threkk.com - Personal page
Documentation=https://threkk.com
After=network.target

[Service]
ExecStart=${node} ${next} start
# Required on some systems
WorkingDirectory=${dir}

# Restart service after 10 seconds if node service crashes
Restart=always
RestartSec=10

# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=threkk.com

Type=simple
User=${user}
Environment=NODE_ENV=production PORT=3000

[Install]
WantedBy=multi-user.target`

console.log(service)
