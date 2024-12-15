---
name: Bug report
about: Create a report to help us improve
title: "[BUG] {title}"
labels: bug
assignees: flafflar
---

**System information:**
 - OS (Distro and version)
 - Version of Plasma Framework (available in the Info Center)

**Describe the bug**
A clear and concise description of what the bug is.

**Any error message shown in the console**
Please execute the following commands in the console and upload the outputs.

> *Important:* You first need to install `plasma-sdk` for the `plasmoidviewer` command to be available.

```sh
git clone https://github.com/flafflar/panon.git
cd panon
git submodule update --init
plasmoidviewer --applet=plasmoid
```
