// Copyright (c) 2024, Vedika Dixit and contributors
// For license information, please see license.txt
    frappe.ui.form.on('Job Apply'), {
        role: function(frm) {
            if (frm.doc.role) {
                frm.refresh_field('details');
            }
        }
    };
    frappe.ui.form.on('Details', {
        onload: function(frm, cdt, cdn) {
            var child = locals[cdt][cdn];
            var role = frm.doc.role;
            if (role === 'Developer') {
                frm.set_df_property('language', 'options', ['Python', 'JavaScript', 'PHP']);
            } else if (role === 'QA') {
                frm.set_df_property('language', 'options', ['Selenium', 'Appium', 'JUnit']);
            } else if (role === 'Graphic Designer') {
                frm.set_df_property('language', 'options', ['Adobe Photoshop', 'Adobe Illustrator', 'Sketch']);
            }
        }
    });
    frappe.ui.form.on('Details', {
        language: function(frm, cdt, cdn) {
            var child = locals[cdt][cdn];
            if (child.language === 'Python') {
                frappe.model.set_value(cdt, cdn, 'framework', 'Django');
            } else if (child.language === 'JavaScript') {
                frappe.model.set_value(cdt, cdn, 'framework', 'React Native');
            } else if (child.language === 'PHP') {
                frappe.model.set_value(cdt, cdn, 'framework', 'Laravel');
            }
        }
    });
    frappe.ui.form.on('Details', {
        IDEs: function(frm, cdt, cdn) {
            var child = locals[cdt][cdn];
            if (child.IDEs) {
                frappe.model.set_value(cdt, cdn, 'applied_date', frappe.datetime.nowdate());
                frappe.model.set_value(cdt, cdn, 'initials', frappe.session.user_fullname);
            }
        }
    });
    frappe.ui.form.on('Details', {
        test_environments: function(frm, cdt, cdn) {
            var child = locals[cdt][cdn];
            if (child.test_environments) {
                frappe.model.set_value(cdt, cdn, 'applied_date', frappe.datetime.nowdate());
                frappe.model.set_value(cdt, cdn, 'initials', frappe.session.user_fullname);
            }
        }
    });
    frappe.ui.form.on('Details', {
        design_style: function(frm, cdt, cdn) {
            var child = locals[cdt][cdn];
            if (child.design_style) {
                frappe.model.set_value(cdt, cdn, 'applied_date', frappe.datetime.nowdate());
                frappe.model.set_value(cdt, cdn, 'initials', frappe.session.user_fullname);
            }
        }
    });
    

