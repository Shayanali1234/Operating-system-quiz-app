const quizData = [
    {
        question: "What is the primary purpose of an operating system?",
        a: "To develop software applications",
        b: "To manage hardware resources and provide services to applications",
        c: "To enhance computer performance",
        d: "To manage networking protocols",
        correct: "b",
    },
    {
        question: "Which component of the operating system interacts directly with the hardware?",
        a: "Kernel",
        b: "Shell",
        c: "File System",
        d: "Application Software",
        correct: "a",
    },
    {
        question: "System calls provide an interface to the services made available by the operating system to:",
        a: "Hardware components",
        b: "Applications",
        c: "Other operating systems",
        d: "Network protocols",
        correct: "b",
    },
    {
        question: "Which of the following is an example of a system call for file management?",
        a: "fork()",
        b: "open()",
        c: "exec()",
        d: "wait()",
        correct: "b",
    },
    {
        question: "What is the purpose of a process control block (PCB)?",
        a: "To manage the execution of multiple threads",
        b: "To store information about a process",
        c: "To schedule processes",
        d: "To manage virtual memory",
        correct: "b",
    },
    {
        question: "Which scheduling algorithm aims to reduce the average waiting time?",
        a: "Round Robin",
        b: "Shortest Job First (SJF)",
        c: "First Come First Serve (FCFS)",
        d: "Priority Scheduling",
        correct: "b",
    },
    {
        question: "Which of the following is an example of IPC (Inter-Process Communication) mechanism?",
        a: "Pipes",
        b: "Threads",
        c: "CPU Scheduling",
        d: "Context Switching",
        correct: "a",
    },
    {
        question: "Semaphore and Mutex are used for:",
        a: "Managing processes",
        b: "Achieving synchronization",
        c: "Memory allocation",
        d: "File management",
        correct: "b",
    },
    {
        question: "What is the purpose of demand paging?",
        a: "To increase the speed of swapping",
        b: "To reduce the amount of main memory needed",
        c: "To bring pages into memory only when needed",
        d: "To increase the size of the page file",
        correct: "c",
    },
    {
        question: "Which memory allocation technique supports the concept of virtual memory?",
        a: "Contiguous Memory Allocation",
        b: "Paging",
        c: "Segmentation",
        d: "Swapping",
        correct: "b",
    },
    {
        question: "What is the primary advantage of using threads in a process?",
        a: "Threads are easier to create than processes",
        b: "Threads allow for better parallelism",
        c: "Threads consume less memory",
        d: "Threads do not require synchronization",
        correct: "b",
    },
    {
        question: "Which threading model allows multiple threads to run concurrently on multiple processors?",
        a: "Many-to-One Model",
        b: "One-to-One Model",
        c: "Many-to-Many Model",
        d: "Two-level Model",
        correct: "c",
    },
    {
        question: "What is the critical section problem concerned with in synchronization?",
        a: "Ensuring only one process accesses a shared resource at a time",
        b: "Preventing deadlock situations",
        c: "Managing CPU scheduling",
        d: "Allocating memory to processes",
        correct: "a",
    },
    {
        question: "Which condition is necessary for a deadlock to occur?",
        a: "Mutual exclusion",
        b: "No preemption",
        c: "Hold and wait",
        d: "Circular wait",
        correct: "d",
    },
    {
        question: "What is a disadvantage of segmentation in memory management?",
        a: "It does not support sharing of code and data",
        b: "Segments are of variable size",
        c: "Difficulty in implementation due to variable-length partitions",
        d: "Inefficient use of memory space",
        correct: "c",
    },
    {
        question:
            "In paging, what is a page fault?",
        a: "Accessing a page that is not present in the main memory",
        b: "Excessive memory allocation to a process",
        c: "Fragmentation of memory pages",
        d: "Paging the wrong page in a sequence",
        correct: "a"
    },
    {
        question: "What is the purpose of a file allocation table (FAT) in file systems?",
        a: "It stores the file names and their attributes",
        b: "It manages free space on disk",
        c: "It maintains the structure of directories",
        d: "It controls access permissions to files",
        correct: "a"
    },
    {
        question: "Which disk scheduling algorithm aims to minimize the average seek time?",
        a: "FCFS (First Come First Serve)",
        b: "SCAN",
        c: "C-LOOK",
        d: "SSTF (Shortest Seek Time First)",
        correct: "d"
    },
    {
        question: "What is the purpose of swap space in operating systems?",
        a: "To store temporary files",
        b: "To provide additional RAM when the physical memory is full",
        c: "To swap user processes to the kernel space",
        d: "To manage file system metadata",
        correct: "b"
    },
    {
        question: "How does Virtual Memory aid in system protection?",
        a: "By encrypting the entire memory",
        b: "By dividing the memory into secure and insecure sections",
        c: "By implementing memory segmentation",
        d: "By providing memory protection through address spaces",
        correct: "d"
    },
    {
        question: "Which directory structure organizes files and folders in a hierarchical tree-like structure?",
        a: "Flat directory structure",
        b: "Binary tree structure",
        c: "Hierarchical directory structure",
        d: "Indexed directory structure",
        correct: "c"
    },
    {
        question: "What is the purpose of the Master File Table (MFT) in the NTFS file system?",
        a: "It contains information about file permissions",
        b: "It stores file names and their corresponding data blocks",
        c: "It maintains a log of disk operations",
        d: "It stores metadata about files and directories",
        correct: "d"
    },
    {
        question: "Which free space management technique maintains a list of free disk blocks?",
        a: "Bit vector",
        b: "Linked list",
        c: "Counting method",
        d: "Bitmap",
        correct: "a"
    },
    {
        question: "In disk scheduling algorithms, which technique prioritizes requests that are closest to the current position of the disk arm?",
        a: "FCFS (First-Come, First-Served)",
        b: "SCAN",
        c: "C-LOOK",
        d: "SSTF (Shortest Seek Time First)",
        correct: "d"
    },
    {
        question: "What is the primary purpose of virtual machines in operating systems?",
        a: "To simulate physical hardware components",
        b: "To create an isolated environment for applications",
        c: "To accelerate CPU performance",
        d: "To enhance file system security",
        correct: "b"
    },
    {
        question: "How does a Type-1 hypervisor differ from a Type-2 hypervisor?",
        a: "Type-1 runs directly on the hardware, while Type-2 runs on a host operating system",
        b: "Type-2 provides better performance than Type-1",
        c: "Type-1 is used in desktop virtualization, while Type-2 is used in server virtualization",
        d: "Type-1 requires internet connectivity, whereas Type-2 does not",
        correct: "a"
    },
    {
        question: "Which file access method allows reading and writing operations at any point in the file?",
        a: "Sequential access",
        b: "Direct access",
        c: "Indexed access",
        d: "Contiguous access",
        correct: "b"
    },
    {
        question: "What does the 'inode' contain in Unix-like file systems?",
        a: "File contents",
        b: "File name and attributes",
        c: "Directory structure",
        d: "File metadata and pointers to data blocks",
        correct: "d"
    },
    {
        question:
            "How does memory mapping of files enhance performance in an operating system?",
        a: "By reducing the file size",
        b: "By eliminating the need for file system access for I/O operations",
        c: "By compressing the file contents in memory",
        d: "By removing file access restrictions",
        correct: "b"
    },
    {
        question: "Which term describes the situation where the operating system spends a significant amount of time swapping pages instead of executing instructions?",
        a: "Fragmentation",
        b: "Paging",
        c: "Thrashing",
        d: "Contention",
        correct: "c"
    },
    {
        question: "Which system call is used to create a new process in Unix-like operating systems?",
        a: "exec()",
        b: "fork()",
        c: "wait()",
        d: "pipe()",
        correct: "b"
    },
    {
        question: "What is the purpose of the 'chmod' command in Unix-like operating systems?",
        a: "Change file ownership",
        b: "Change file permissions",
        c: "Compress files",
        d: "Copy files",
        correct: "b"
    },
    {
        question: "Which of the following describes a disadvantage of paging compared to segmentation?",
        a: "Overhead in table management",
        b: "Difficulty in implementing protection and sharing",
        c: "Unequal partition sizes",
        d: "Fragmentation issues",
        correct: "a"
    },
    {
        question: "How does segmentation differ from paging in memory management?",
        a: "Segmentation uses fixed-size blocks, while paging uses variable-sized blocks",
        b: "Segmentation allows logical division of programs into segments, while paging divides programs into fixed-size pages",
        c: "Segmentation eliminates fragmentation, while paging causes fragmentation",
        d: "Segmentation is faster than paging in accessing memory blocks",
        correct: "b"
    },
    {
        question: "Which scheduling algorithm gives priority to the process with the highest CPU burst time?",
        a: "First Come First Serve (FCFS)",
        b: "Round Robin",
        c: "Shortest Job First (SJF)",
        d: "Priority Scheduling",
        correct: "c"
    },
    {
        question: "What is a race condition in multithreading?",
        a: "A condition where multiple threads try to access a shared resource simultaneously",
        b: "A situation where only one thread can access a resource at a time",
        c: "A deadlock situation in threads",
        d: "A condition where threads cannot be scheduled",
        correct: "a"
    },
    {
        question: "What is the purpose of the Translation Lookaside Buffer (TLB) in virtual memory systems?",
        a: "It stores recently accessed disk blocks",
        b: "It caches frequently accessed pages' frame numbers",
        c: "It manages memory allocation for processes",
        d: "It maintains the page table hierarchy",
        correct: "b"
    },
    {
        question: "In demand paging, what happens when a page fault occurs?",
        a: "The operating system terminates the process",
        b: "The required page is fetched from the disk to main memory",
        c: "The page table is cleared",
        d: "The processor switches to kernel mode",
        correct: "b"
    },
    {
        question: "Which technique is used for deadlock avoidance in operating systems?",
        a: "Banker's Algorithm",
        b: "Deadlock Ignorance",
        c: "Deadlock Detection",
        d: "Deadlock Prevention",
        correct: "a"
    },
    {
        question: "What is the purpose of a resource allocation graph in deadlock detection?",
        a: "To identify processes waiting for resources",
        b: "To represent processes and resources, identifying potential circular waits",
        c: "To allocate resources efficiently",
        d: "To prevent deadlock situations",
        correct: "b"
    },
    {
        question: "Which synchronization mechanism allows multiple threads to access a shared resource simultaneously?",
        a: "Mutex",
        b: "Semaphore",
        c: "Critical section",
        d: "Barrier",
        correct: "a"
    },
    {
        question:
            "What is the purpose of a critical section in concurrent programming?",
        a: "It ensures that only one process executes at a time",
        b: "It ensures that a process executes without interruption",
        c: "It protects shared resources from simultaneous access by multiple threads",
        d: "It ensures fair access to resources",
        correct: "c"
    },
    {
        question: "Which part of the address generated by the CPU is used as an index into the page table?",
        a: "Offset",
        b: "Segment",
        c: "Page number",
        d: "Frame number",
        correct: "c"
    },
    {
        question: "How does thrashing impact system performance in virtual memory?",
        a: "Improves CPU utilization",
        b: "Reduces the number of page faults",
        c: "Degrades system performance due to excessive paging",
        d: "Increases memory access time",
        correct: "c"
    },
    {
        question: "In a Unix-like file system, what is the purpose of the 'unlink' system call?",
        a: "Deletes a file",
        b: "Creates a hard link to a file",
        c: "Renames a file",
        d: "Opens a file",
        correct: "a"
    },
    {
        question: "Which disk scheduling algorithm optimizes disk arm movement by selecting requests in the direction of disk head movement until there are no more requests in that direction?",
        a: "SCAN",
        b: "C-SCAN",
        c: "LOOK",
        d: "C-LOOK",
        correct: "c"
    },
    {
        question: "What is the purpose of an Access Control List (ACL) in operating system security?",
        a: "To control access to network resources",
        b: "To manage permissions for users on files or directories",
        correct: "b"
    },
    {
        question: "Which security mechanism restricts a process from accessing resources beyond its allocated memory space?",
        a: "Sandbox",
        b: "Firewall",
        c: "Encryption",
        d: "Access Control",
        correct: "a"
    },
    {
        question: "What is the purpose of swapping in operating systems?",
        a: "To transfer data between CPU registers and main memory",
        b: "To transfer data between RAM and secondary storage",
        c: "To allocate memory dynamically to processes",
        d: "To manage access permissions for files",
        correct: "b"
    },
    {
        question: "Which memory management technique allows the allocation of memory blocks that aren't necessarily contiguous?",
        a: "Segmentation",
        b: "Paging",
        c: "Swapping",
        d: "Contiguous Memory Allocation",
        correct: "a"
    },
    {
        question: "Which security measure ensures that a system remains functional and operational despite potential attacks or failures?",
        a: "Intrusion Detection Systems (IDS)",
        b: "Redundancy",
        c: "Firewalls",
        d: "Security Patching",
        correct: "b"
    },
    {
        question: "In the context of security, what does the principle of least privilege mean?",
        a: "Providing the most extensive system privileges to users",
        b: "Granting access to all available resources",
        c: "Providing only the necessary access rights for specific tasks",
        d: "Limiting system access to administrators only",
        correct: "c"
    },
    {
        question: "Which file system structure allows for the efficient and quick retrieval of files by using a hash table?",
        a: "Indexed allocation",
        b: "Linked allocation",
        c: "Indexed allocation with linked blocks",
        d: "File Allocation Table (FAT)",
        correct: "a"
    },
    {
        question: "What is the purpose of a file descriptor in Unix-like operating systems?",
        a: "It is a unique identifier for a file used in file system indexing",
        b: "It stores the file's contents",
        c: "It manages file access permissions",
        d: "It provides the file's metadata",
        correct: "a"
    },
    {
        question:
            "In a two-level directory structure, what does the first level directory contain?",
        a: "File names",
        b: "File metadata",
        c: "File pointers",
        d: "Subdirectories",
        correct: "d"
    },
    {
        question: "Which disk scheduling algorithm allows requests to be processed based on their priority?",
        a: "Shortest Seek Time First (SSTF)",
        b: "Priority-based Scheduling",
        c: "Circular SCAN (C-SCAN)",
        d: "First-Come, First-Served (FCFS)",
        correct: "b"
    },
    {
        question: "What is the purpose of a TLB (Translation Lookaside Buffer) in a paging system?",
        a: "To store page table entries",
        b: "To store recently accessed pages",
        c: "To store frame numbers of pages",
        d: "To cache frequently used page table entries",
        correct: "d"
    },
    {
        question: "What is a drawback of using large page sizes in paging systems?",
        a: "Reduced internal fragmentation",
        b: "Decreased TLB efficiency",
        c: "Improved virtual memory management",
        d: "Increased file system performance",
        correct: "b"
    },
    {
        question: "Which system call is used to terminate a process in Unix-based operating systems?",
        a: "exit()",
        b: "fork()",
        c: "wait()",
        d: "exec()",
        correct: "a"
    },
    {
        question: "In Unix-like file systems, what does the 'chmod' command do?",
        a: "Changes the file's ownership",
        b: "Changes the file's timestamp",
        c: "Changes the file's permissions",
        d: "Changes the file's size",
        correct: "c"
    },
    {
        question: "Which disk scheduling algorithm aims to minimize the movement of the disk arm?",
        a: "SCAN",
        b: "C-LOOK",
        c: "LOOK",
        d: "FCFS (First-Come, First-Served)",
        correct: "c"
    },
    {
        question: "What is the purpose of a FAT (File Allocation Table) in file systems like FAT32?",
        a: "It stores file names and their attributes",
        b: "It manages free disk space",
        c: "It contains pointers to data blocks",
        d: "It stores file metadata and permissions",
        correct: "a"
    },
    {
        question: "Which condition is required for deadlock to occur?",
        a: "Mutual exclusion",
        b: "Hold and wait",
        c: "No preemption",
        d: "Circular wait",
        correct: "d"
    },
    {
        question: "What is the purpose of a semaphore in synchronization?",
        a: "To protect critical sections",
        b: "To achieve mutual exclusion",
        c: "To prevent deadlock",
        d: "To coordinate access to shared resources",
        correct: "d"
    },
    {
        question: "Which scheduling algorithm allows the process that has the highest priority to execute first?",
        a: "Round Robin",
        b: "Shortest Remaining Time First (SRTF)",
        c: "Priority Scheduling",
        d: "First-Come, First-Served (FCFS)",
        correct: "c"
    },
    {
        question: "What is the primary advantage of multithreading?",
        a: "Enhanced security",
        b: "Improved process management",
        c: "Increased parallelism",
        d: "Reduced context switching",
        correct: "c"
    },
    {
        question: "What is the purpose of the page table in virtual memory systems?",
        a: "To store the physical addresses of pages",
        b: "To manage memory allocation to processes",
        c: "To translate logical addresses to physical addresses",
        d: "To maintain a list of available memory pages",
        correct: "c"
    },
    {
        question: "Which statement accurately describes thrashing in virtual memory systems?",
        a: "It improves overall system performance",
        b: "It occurs when processes require excessive paging, causing a decline in performance",
        c: "It indicates efficient memory utilization",
        d: "It is a mechanism to prevent deadlock situations",
        correct: "b"
    },
    {
        question:
            "What is the purpose of the directory entry in a file system?",
        a: "To store file metadata",
        b: "To manage file permissions",
        c: "To keep track of file content",
        d: "To store file names and associated information",
        correct: "d"
    },
    {
        question: "Which disk scheduling algorithm scans in both directions, servicing all requests on its path?",
        a: "SCAN",
        b: "C-SCAN",
        c: "LOOK",
        d: "C-LOOK",
        correct: "d"
    },
    {
        question: "Which security measure ensures that a user can access only the resources permitted for their role?",
        a: "Least privilege principle",
        b: "User authentication",
        c: "Access control lists (ACLs)",
        d: "Role-based access control (RBAC)",
        correct: "d"
    },
    {
        question: "What is the purpose of encryption in operating systems?",
        a: "To enhance system performance",
        b: "To prevent unauthorized access to data",
        c: "To accelerate file access",
        d: "To reduce memory overhead",
        correct: "b"
    },
    {
        question: "What is the purpose of the working set model in virtual memory management?",
        a: "To estimate the page fault rate",
        b: "To calculate the number of frames required",
        c: "To determine the set of pages used by a process",
        d: "To identify thrashing situations",
        correct: "c"
    },
    {
        question: "Which term describes the situation where a page is fetched from disk into memory but is removed before being used?",
        a: "Page fault",
        b: "Page replacement",
        c: "Page thrashing",
        d: "Page aging",
        correct: "c"
    },
    {
        question: "Which file allocation method uses pointers to link allocated disk blocks together?",
        a: "Contiguous allocation",
        b: "Linked allocation",
        c: "Indexed allocation",
        d: "File Allocation Table (FAT)",
        correct: "b"
    },
    {
        question: "What is the primary role of the disk scheduler in an operating system?",
        a: "To allocate free space on the disk",
        b: "To manage file permissions",
        c: "To optimize disk access by rearranging pending I/O requests",
        d: "To store file metadata",
        correct: "c"
    },
    {
        question: "Which access control model is based on defining rules that specify what actions subjects can take on objects?",
        a: "Mandatory Access Control (MAC)",
        b: "Discretionary Access Control (DAC)",
        c: "Role-Based Access Control (RBAC)",
        d: "Access Control Lists (ACL)",
        correct: "b"
    },
    {
        question: "What does the principle of defense in depth emphasize in operating system security?",
        a: "Using strong encryption techniques",
        b: "Implementing multiple layers of security mechanisms",
        c: "Restricting user privileges ",
        d: "Regularly updating security patches",


        correct: "b"
    },
    {
        question: "Which scheduling algorithm selects the process with the highest priority for execution?",
        a: "Shortest Job First (SJF)",
        b: "Round Robin (RR)",
        c: "Priority Scheduling",
        d: "First-Come, First-Served (FCFS)",
        correct: "c"
    },
    {
        question: "What is the primary purpose of a semaphore in managing concurrent processes?",
        a: "To protect critical sections",
        b: "To synchronize processes",
        c: "To create child processes",
        d: "To allocate memory",
        correct: "b"
    },
    {
        question: "What is the purpose of the MMU (Memory Management Unit) in a computer system?",
        a: "To manage the allocation of virtual memory",
        b: "To facilitate communication between CPU and cache memory",
        c: "To translate logical addresses to physical addresses",
        d: "To control the allocation of secondary memory",

        correct: "c"
    },
    {
        question: "How does a TLB (Translation Lookaside Buffer) contribute to memory access in a paging system?",
        a: "It stores recently accessed pages for faster retrieval",
        b: "It caches page table entries for quicker translations",
        c: "It manages the allocation of memory pages",
        d: "it handles page replacement algorithms",

        correct: "b"
    },
    {
        question:

            "Which disk scheduling algorithm offers better response time for I/O requests closer to the disk arm's current position?",
        a: "SCAN",
        b: "C-SCAN",
        c: "LOOK",
        d: "C-LOOK",
        correct: "c"
    },
    {
        question: "What is the purpose of an indirect block in file systems?",
        a: "To store file metadata",
        b: "To speed up file access",
        c: "To manage file permissions",
        d: "To address additional data blocks for larger files",
        correct: "d"
    },
    {
        question: "Which security principle ensures that one user's actions or access cannot negatively impact other users or the system itself?",
        a: "Least Privilege",
        b: "Principle of Least Authority",
        c: "Separation of Duties",
        d: "Integrity",
        correct: "b"
    },
    {
        question: "What does the term authentication refer to in the context of operating system security?",
        a: "Restricting access to specific resources",
        b: "Validating the identity of users or entities",
        c: "Preventing unauthorized file modifications",
        d: "Encrypting sensitive data ",

        correct: "b"
    },
    {
        question: "What is the purpose of a mutex in synchronization mechanisms?",
        a: "To allow multiple threads to access a critical section simultaneously",
        b: "To prevent priority inversion",
        c: "To implement condition variables",
        d: "To provide mutual exclusion",
        correct: "d"
    },
    {
        question: "Which condition is necessary for a deadlock to occur in a system?",
        a: "Mutual Exclusion",
        b: "No Preemption",
        c: "Hold and Wait",
        d: "Circular Wait",
        correct: "d"
    },
    {
        question: "What is a TLB (Translation Lookaside Buffer) used for in virtual memory systems?",
        a: "To store page table entries",
        b: "To cache recently accessed page table entries",
        c: "To allocate physical memory to processes",
        d: "To manage disk space",

        correct: "b"
    },
    {
        question: "In the context of paging, what does the term page fault signify?",
        a: "The page is not available in the cache",
        b: "The page is available in the cache",
        c: "The page is swapped out to disk",
        d: "The page is not available in the main memory",
        correct: "d"
    },
    {
        question: "Which file allocation method maintains a table for each file indicating the blocks it occupies on the disk?",
        a: "Contiguous allocation",
        b: "Linked allocation",
        c: "Indexed allocation",
        d: "File Allocation Table (FAT)",
        correct: "c"
    },
    {
        question: "What is the purpose of a directory entry in a file system?",
        a: "To store the file contents",
        b: "To store file permissions",
        c: "To store file metadata",
        d: "To associate a filename with its inode number",
        correct: "d"
    },
    {
        question: "Which access control model uses labels to define the sensitivity and integrity of objects and subjects?",
        a: "Role-Based Access Control (RBAC)",
        b: "Discretionary Access Control (DAC)",
        c: "Mandatory Access Control (MAC)",
        d: "Attribute Based Access Control (ABAC)",

        correct: "c"
    },
    {
        question: "What is the purpose of encryption in the context of operating system security?",
        a: "To prevent unauthorized access to resources",
        b: "To secure communication between devices",
        c: "To restrict file system access",
        d: "To protect data confidentiality",
        correct: "d"
    },
    {
        question: "Which scheduling algorithm provides better response time for time-sharing systems?",
        a: "Round Robin (RR)",
        b: "Shortest Job First (SJF)",
        c: "First Come, First Served (FCFS) ",
        d: "Priority Scheduling",
        d: "To allocate memory resources",

        correct: "a"
    },
    {
        question: "What is the primary purpose of a monitor in concurrent programming?",
        a: "To protect critical sections",
        b: "To manage thread priorities",
        c: "To provide mutual exclusion and condition synchronization",
        d: "To allocate memory resources",

        correct: "c"
    },
    {
        question: "What is the role of a page table in a virtual memory system?",
        a: "To store the contents of pages in main memory",
        b: "To manage the allocation of pages to processes",
        c: "To translate virtual addresses to physical addresses",
        d: "To manage disk space for virtual memory",
        correct: "c"
    },
    {
        question: "Which term refers to a scenario where a required page is not found in the main memory?",
        a: "Page fault",
        b: "Page hit",
        c: "Page replacement",
        d: "Page allocation",

        correct: "a"
    },
    {
        question: "In a file allocation method, what does contiguous allocation imply?",
        a: "Files are stored in a continuous sequence of blocks",
        b: "Files are linked with pointers to allocated blocks",
        c: "Files are allocated in non-contiguous blocks",
        d: "Files are indexed for allocation",
        correct: "a"
    },
    {
        question: "What is the function of an inode in Unix-based file systems?",
        a: "To store file contents",
        b: "To maintain file permissions",
        c: "To store file metadata and attributes",
        d: "To manage file directory structure",
        correct: "c"
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
}) 