# HarryPotter

Welcome to the **Harry Potter Themed Web Exploitation CTF**! 🧙‍♂️🦉 This Capture The Flag (CTF) challenge is inspired by the magical world of Harry Potter, designed to test and enhance your web exploitation skills. The challenges will take you through various stages of web security vulnerabilities, starting from very basics to medium and hard level questions, providing a fun and immersive experience to complete beginners. 

## Challenge Overview

This CTF consists of multiple stages where you'll face different web exploitation techniques. Each stage presents a real-world security vulnerability commonly found in web applications. By solving each stage, you’ll gain knowledge and hands-on experience in web security, including:

1. **Challeneg1**:
   - Learn to perform directory traversal attack.
   - Identify ways in which attackers can navigate through the webpages for intial recon.

2. **Cryptography**:
   - Here we will understand how to encode, encrypt and hash our data.
   - Cryptography is everywhere, getting a good hold of cryptography is very helpfu.

3. **Cookie Maniipulation**:
   - Cookies are used for various reasons like session handling, security purposes.
   - Manipulating cookie value or even understanding the importance of cookie is very helpful.

4. **Insecure Direct Object Reference (IDOR)**:
   - Explore how attackers can exploit a poorly validated input to access data they should not be authorized to view or modify.
   - Understand the importance of secure access control checks and how attackers can manipulate URLs or form inputs to gain unauthorized access.

5. **SQL Injection**:
   - A classic attack vector where you’ll discover how poorly secured SQL queries can be exploited.
   - You’ll learn how to inject malicious SQL commands into vulnerable endpoints, gaining access to sensitive information or even compromising the database.



## How to Play

- Each challenge will be hosted on a web page with a set of hints to guide you.
- You must complete each challenge to move on to the next stage, and each stage contains clues that are related to the Harry Potter universe.
- You dont need any tools for this, You can host it on your terminal to play the ctf.

## Tips and Hints

- **For Cookies**: Look for cookies that might store sensitive information such as user credentials or session identifiers. Can you change the cookie's value to impersonate an authorized user?
- **For SQL Injection**: Check for any form fields or URL parameters that could be vulnerable to SQL injection. Pay close attention to login forms and any part of the application that interacts with a database.
- **For IDOR**: Try manipulating object references such as file IDs, user IDs, or database record identifiers in URLs or form inputs to access unauthorized data.

## Made with love by "You Know Who" 💖

May your journey be as magical as it is enlightening. Enjoy the challenge, and remember to always follow the magic of secure coding practices in the real world. Good luck!

---

🪄 **Disclaimer**: This CTF was made by secuRIT for hackRITual 2025