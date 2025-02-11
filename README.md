# 🌍 Travel App - Landing Page

This is a **modern landing page** built using **Next.js, React, TypeScript, and Tailwind CSS**.  
The page is structured using **reusable components** for easy maintenance and scalability.  

## 🚀 Features
- ✅ **Responsive UI** built with **Tailwind CSS**  
- ✅ **Component-based structure** for better maintainability  
- ✅ **Dockerized** for easy deployment  
- ✅ **Live on AWS EC2** for public access  

---

## 🛠 Tech Stack
- **Next.js** (React Framework)  
- **TypeScript**  
- **Tailwind CSS**  
- **Docker** (for containerization)  
- **AWS EC2** (for hosting)  

---

## 📦 Running Locally with Docker
You can run this application using **Docker** in just a few steps:

### **1️⃣ Pull the Docker Image**
```bash
docker pull your_docker_username/travel_app
```
### **2️⃣ Run the Docker Container**
```bash
docker run -d -p 3000:3000 your_docker_username/travel_app
```
### 3️⃣ Open the Application
Visit 👉 http://localhost:3000 in your browser.

✅ Now, the app is running on your local machine inside a Docker container! 🎉

### 🌐 Accessing the Live Website on AWS
This application is hosted on AWS EC2 and can be accessed publicly:

👉 http://35.169.134.78 (Elastic IP)

## 🏗️ Deploying on AWS EC2 (Step-by-Step)
If you want to deploy this app on AWS EC2, follow these steps:

### 1️⃣ Launch an EC2 Instance
- Go to AWS EC2 Console
- Create an EC2 instance using Amazon Linux 2023
- Choose t2.micro (Free Tier Eligible)
- Add Security Group Rules:
    - Port 22 (SSH) → Open for your IP
    - Port 80 (HTTP) → Open to public (0.0.0.0/0)
### 2️⃣ Install Docker on EC2
```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
```
### 3️⃣ Pull and Run the Docker Container
```bash
docker pull your_docker_username/travel_app
docker run -d -p 80:3000 your_docker_username/travel_app
```
### 4️⃣ Attach an Elastic IP (Optional but Recommended)
- Go to AWS EC2 Console → Elastic IPs
- Allocate a new Elastic IP
- Associate it with your EC2 instance
✅ Now, your website is permanently accessible at http://[Elastic IP] 🎉

## 🤝 Contributing

We welcome contributions to improve this project! If you'd like to contribute, follow these steps:

### **1️⃣ Fork the Repository**
- Click the **Fork** button at the top-right of this repository.

### **2️⃣ Clone Your Fork**
```bash
git clone https://github.com/your-username/travel_app.git
cd travel_app
```
### 3️⃣ Create a New Branch
```bash
git checkout -b feature-new-section
```
### 4️⃣ Make Your Changes
- Modify the code and add new features or fix bugs.
- Test your changes before committing.

### 5️⃣ Commit and Push
```bash
git add .
git commit -m "Added a new feature"
git push origin feature-new-section
```
### 6️⃣ Submit a Pull Request (PR)
- Go to the Pull Requests tab in GitHub.
- Click New Pull Request and select your branch.
- Write a short description and submit.
✅ Your contribution will be reviewed and merged if approved! 🚀

## 📩 Questions?
If you have any questions or suggestions, feel free to open an issue or contact us.[sineen.0509@gmail.com]

🎯 We appreciate your contributions! 🙌
