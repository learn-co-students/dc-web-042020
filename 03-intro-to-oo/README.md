
## Objectives

* Define `object` in programming domain
* "Base" classes, i.e., Datatypes
    - String
    - Boolean
    - Hash
    - Array
    - Integer
    - Float
    - Object
    - NilClass
* Create a class and instantiate an instance of the class
* Explain the difference between a class and an instance
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Call methods on the implicit or explicit `self`
* Define attribute readers and writers using `attr_` macros
* Explain the need for variable scope and why it's important to not utilize global variables

## Outstanding Questions:

- How does initialize work? / Constructors
- Type vs Class, with errors
- What types are _not_ classes?  Float?  Integer?
- @variables / instance variables
- macro methods `attr_*` 
- getter vs setter methods; why are they best practice?
    - `kanye.instance_variable_set(:@name, "Yeezy") `
    - `kanye.name = "Yeezy"
- optional and default parameters, when to use?