# **TypeMarkup**

TypeMarkup is a beautiful and simple language for web documents.

## **Preview**

![image](https://user-images.githubusercontent.com/78381898/190880900-34dd2da4-af8e-4165-8346-6993b77429ea.png)

## **Result**

![image](https://user-images.githubusercontent.com/78381898/190880949-b7093267-2751-42d1-9291-cfd3654df293.png)

## **Development**

### **Not implemented**

- Brackets scope

- Macros

    + @import

    + @[custom]

### **broken functionality**

- Only top level references working

    + ```scss
        // Pure TypeMarkup
        * html - lang 'en' html

        & html head
            - charset 'utf-8'
            meta
        ```

### **Parser linter protoype**

![TypeMarkup-Linter](https://user-images.githubusercontent.com/78381898/235047701-1f1c5a4e-6c15-44b2-b6db-f4659de26f50.png)

## **Contributing**

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## **LICENSE**

[Apache-2.0](https://www.apache.org/licenses/)
