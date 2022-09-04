// Javascript is a single-threaded, non-blocking, asynchronous and concurrent language

// asynchronous ini adalah salah satu bagian dari javascript

// ada istilah single dan multi thread
// klo single thread merupkan task (proses) yg dikerjain secara satu persatu thread
// klo multi thread merupakan task (proses) yg bisa dikerjakan oleh banyak thread

// cth single thread:
// thread 1 = task 1 => task 2 => task 3

// cth multi thread :
// thread 1 = task 1                            task 5
// thread 2 =       task 2
// thread 3 =               task 3      task 4


// blocking itu adlah proses yang hrs diselesaikan terlebih dahulu jika ingin melanjukan ke proses 
// selanjutnya

// kalo non-blocking itu adalah proses yang bisa dikerjakan walaupun proses sebelumnya blm selesai

// nah jadi ada jg 2 konsep yaitu synchronous dan asynchronous
// klo synchronous itu sama seperti single thread
// klo asynchronous itu misal kita sedang mengerjakan thread 1 nah thread 1 itu blm selesai
// dan kita bisa pindah ke thread 2 padahal thread 1 blm selesai hingga sampai akhirnya thread 1 dan 2
// selesai (single threaded)

// kalo asynchronous multi thread itu kita bisa mengerjakan task dengan lebih dari satu thread atau
// dikerjakan secara parallel

// jadi asynchronous + single-threaded = concurrency
// asynchronous + multi-threaded = parallelism