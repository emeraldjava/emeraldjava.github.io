---

title: "ansible-permission-error-with-copy-command-using-with-items-on-a-dictionary"
date: "2016-02-23 12:12:34 +0000"
---

# [ansible-permission-error-with-copy-command-using-with-items-on-a-dictionary](http://stackoverflow.com/questions/35577184/ansible-permission-error-with-copy-command-using-with-items-on-a-dictionary)

I have the following YAML dictionaries defined for a set of glassfish config files that I need to copy as part of a deployment

    # glassfish config files
    glassfish_config_files:
      - { name: "config/domain.xml", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      #- { name: "config/test.xml", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }

    # glassfish common jar files
    glassfish_extra_libs:
      - { name: "lib/jasper-fonts-3.0-SNAPSHOT.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/jcl-over-slf4j-1.6.6.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/log4j-over-slf4j-1.6.6.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/logback-classic-1.0.6.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/logback-core-1.0.6.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/ojdbc6-11.2.0.3.0.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }
      - { name: "lib/slf4j-api-1.6.6.jar", owner: "{{ app_account }}", group: "{{ app_account }}", mode: "0640", state: "enabled" }

And in my ansible playbook i have these two tasks

    - name: "copy config files"
      action: template src={{ glassfish_templates_dir }}/{{ item.name }} dest={{ gf_domain_path }}/{{ item.name }} owner={{ item.owner }} group={{ item.group }} mode={{ item.mode }}
      with_items: glassfish_config_files
      when: item.state == 'enabled'

    - name: "copy custom jar files"
      #become: yes
      #become_user: app
      copy:
        src: "{{ glassfish_templates_dir }}/{{ item.name }}"
        dest: "{{ gf_domain_path }}/{{ item.name }}"
        owner: "{{ item.owner }}"
        group: "{{ item.group }}"
        mode: "{{ item.mode }}"
      with_items: glassfish_extra_libs
      when: item.state == 'enabled'

When i run my ansible command i get this error.

    fatal: [localhost]: FAILED! =>
    {"failed": true, "msg": "ERROR! privilege output closed while waiting for password prompt:
    \nBECOME-SUCCESS-whigccifcoswlzyscbglejhqtvzfycng\n1  
    /opt/app/glassfish3/glassfish/domains/domain1/lib/jcl-over-slf4j-1.6.6.jar\n"}

The first jar file is transferred but the second always fails. I know i have to be carefully with the double quotes when referencing the dictionary values but I believe I have this correct. Any suggestions?
