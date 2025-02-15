---
id: defaults
title: Selecting default configs
---

import {ExampleGithubLink} from "@site/src/components/GithubLink"

<ExampleGithubLink to="examples/tutorials/basic/your_first_hydra_app/5_defaults"/>

After office politics, you decide that you want to use MySQL by default.
You no longer want to type `+db=mysql` every time you run your application.

You can add a **Default List** to your config file. 
A **Defaults List** is a list telling Hydra how to compose the final config object. 
By convention, it is the first item in the config.


### Config group defaults

```yaml title="config.yaml"
defaults:
  - db: mysql
```

Remember to specify the `config_name`:
```python
@hydra.main(config_path="conf", config_name="config")
def my_app(cfg: DictConfig) -> None:
    print(OmegaConf.to_yaml(cfg))
```

When you run the updated application, MySQL is loaded by default.
```yaml
$ python my_app.py
db:
  driver: mysql
  pass: secret
  user: omry
```

You can have multiple items in the defaults list, e.g.
```yaml
defaults:
 - db: mysql
 - db/mysql/engine: innodb
```

The defaults are ordered:
 * If multiple configs define the same value, the last one wins. 
 * If multiple configs contribute to the same dictionary, the result is the combined dictionary.


#### Overriding a config group default

You can still load PostgreSQL, and override individual values.
```yaml
$ python my_app.py db=postgresql db.timeout=20
db:
  driver: postgresql
  pass: drowssap
  timeout: 20
  user: postgres_user
```

You can remove a default entry from the defaults list by prefixing it with ~:
```yaml
$ python my_app.py ~db
{}
```

### Composition order of primary config
Your primary config can contain both config values and a Defaults List.
In such cases, you should add the `_self_` keyword to your defaults list to specify the composition order of the config file relative to the items in the defaults list.

* If you want your primary config to override the values of configs from the Defaults List, append `_self_` to the end of the Defaults List.
* If you want the configs from the Defaults List to override the values in your primary config, insert `_self_` as the first item in your Defaults List.
 

<div className="row">

<div className="col col--6">

```yaml title="config.yaml" {3}
defaults:
  - db: mysql
  - _self_

db:
  user: root
```
</div>
<div className="col  col--6">

```yaml title="Result config: db.user from config.yaml" {4}
db:
  driver: mysql  # db/mysql.yaml
  pass: secret   # db/mysql.yaml 
  user: root     # config.yaml


```
</div>
<div className="col col--6">

```yaml title="config.yaml" {2}
defaults:
  - _self_
  - db: mysql

db:
  user: root
```
</div>
<div className="col  col--6">

```yaml title="Result config: All values from db/mysql" {4}
db:
  driver: mysql # db/mysql.yaml
  pass: secret  # db/mysql.yaml
  user: omry    # db/mysql.yaml


```
</div>
</div>

See [Composition Order](advanced/defaults_list.md#composition-order) for more information.

:::info
The default composition order changed between Hydra 1.0 and Hydra 1.1.
- **Hydra 1.0**: Configs from the defaults list are overriding the primary config
- **Hydra 1.1**: A config is overriding the configs from the defaults list.

To mitigate confusion, Hydra 1.1 issue a warning if the primary config contains both Default List and Config values, and `_self_` is not specified in the Defaults List.  
 The warning will disappear if you add `_self_` to the Defaults List based on the desired behavior.
:::

### Non-config group defaults
Sometimes a config file does not belong in any config group.
You can still load it by default. Here is an example for `some_file.yaml`.
```yaml
defaults:
  - some_file
```
Config files that are not part of a config group will always be loaded. They cannot be overridden.  
Prefer using a config group.

:::info
For more information about the Defaults List see [Reference Manual/The Defaults List](../../../advanced/defaults_list.md).
:::
