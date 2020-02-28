# Campus Life (Guidelines)

### [SNUSISA Website](https://snusisa.com)

This folder contains all the source code for the Campus Life page in the official SISA website. Please read through the following contents before making any changes to the original source code.

## Files

### **tabView**

> _File to be inserted in website's Campus Life custom HTML code section_

Contains all external references to all individual tab components, css and javascript files. Javascript for the tab functions is located in `tab.js`

### **TabComponents**

Folder containing all individual tab component scripts. If you want to add a new tab component, create a new file and add to this folder. You should convert html files to js before referencing them in the tabView file.

## Add or manage tab content

You can add additional rows, columns or edit existing information by editing the **table** data in the respective table file. Changes made can be previewed using `tabView.html`

> **HTML files in this folder are used for preview purposes. Any changes should be made to the .js files.**

## Adding new tabs

You can add new tabs by creating a new table file and adding a new tab button and tab content to **tabView.html**
