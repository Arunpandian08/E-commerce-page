# 🚀IN THIS REPOSITORY
---
###  Shopping page 🛍🛒
## You can see output in [netlify.com](https://e-commerce-cart-page-by-arun.netlify.app/)

   + From task i displayed a shopping page `Dynamically`
   + when click `Addcart` button in Navbar cart value will be adding
   + using state managing 
  ```javascript
    const[status, setStatus]=useState(0)
  ```
   + Using `Array.map()` method to collecting cart data's from given array objects.
```javascript
Array.map((item,index)=>{
    return(
        <>
        
        </>
    )
});
```
finally collect `{item.required values in array object}`
 
 + Displayed in a particular places using  `HTML` tags and added `CSS` 
---
### Vite + React commends
```command prompt
PS D:\React\day4> npm create vite@latest `File Name`
√ Select a framework: » React
√ Select a variant: » JavaScript
Done.
Now run:
  cd `File Name`
  npm install
  npm run dev
 
PS D:\React\day4\`File Name`> npm install
PS D:\React\day4\`File Name`> npm run dev
> myday1project@0.0.0 dev
> vite
  VITE v4.4.9  ready in 985 ms
  ➜  Local:   http://localhost:5173/
  ```  
