/**
 * File: c:\Users\Nitish\Downloads\Compressed\startup-jobs-in-app\startup-jobs-in-app\index.js
 * Project: c:\Users\Nitish\Downloads\Compressed\startup-jobs-in-app\startup-jobs-in-app
 * Project Name: MAXIMUS INCIDENT MANAGEMENT SYSTEM
 * Created Date: Saturday, July 18th 2020, 12:53:12 pm
 * Author: Amitabh Anand
 * -----
 * Created By: Amitabh Anand amitabh.anandcl@gmail.com
 * Modified By: Amitabh Anand
 * -----
 * LICENSE:
 * this Project is under private license of Chicago,350 North Orleans Street, Suite 300, Chicago, IL 60654 Copyright 2020.
 * Development Team Aadya Technobytes Pvt. Ltd. not to modify from other open license domain.
 * only modified by of development team member. team member not part of team member. not Authorized to modify any type of code.
 * he/she will be treated as breaking license rule. if any other organization that not authorized by parent organization also will be treated as breaking license rule
 * Copyright (c) 2020 Addya Technobytes Pvt. Ltd.
 * ------------------------------------
 * Description: Maximus Incident Management System is patrol and case related project.
 */

const path = require("path");
const fs = require("fs-extra");

if (fs.existsSync(path.join("assets", "hello1"))) {
  console.log("yes");
} else {
  console.log("not");
}
