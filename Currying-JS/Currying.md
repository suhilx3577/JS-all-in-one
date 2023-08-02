1) What is Currying ?

Ans ) Currying is a programming technique in which a function with multiple parameters is converted into
    a series of function, Each Function Taking one Argument

    f(a,b,c,d)  to  f(a)(b)(c)(d)



2) Why Currying ?

    -> To avoid Passing Same Varibales again and again
    -> To Create Higher Order Function
    -> To make our function pure and less prone to errors
    -> It allows for Partial Function Application Creating More Flexible and Reusable Code
    -> It divides one function into Multiple Functions so that one handles one set of responsibility



3) Advantages of Currying ?

    -> With Currying we can avoid passing of Same Variables again and again
    -> To create Higher Order Function
    -> Currying makes our function Pure and Less prone to Error
    -> It Allows for partial function application creating more flexible and reusablity




4) Disadvantages of Currying ?

    -> As The level of currying Increased the code can become MORE COMPLEX and HARD to READ
    -> Deeply nested currying can be CHALLENGING to MAINTAIN and DEBUG
    -> PERFORMANCE OVERHEAD - each level of currying introduces additional functional Call which can
                              result in Performance Overhead
    -> Not all functions are suited For Curyying
    -> Debugging Difficulties It can be tricky to trace the flow due to multiple functional call and Closures




5) Partial Application ? How its Different from Currying ?

    -> it is a process of fixing specific number of arguments of a functions and returning a new function
       with remaining , Unfixed arguments
    
    -> Unlike Currying it does not Require Series of function.
    -> It fixes some arguments upfront and produces a new function with fewer arguments

    Both Currying and Partial Applications are used to handle functions with multiple arguments,
    they are different in how they handle those arguements

    Both Currying and Partial Application help to create flexible and resuable function but they achieve this
    in different ways


