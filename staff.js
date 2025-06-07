        // Sample staff data
        const staffMembers = [
            {
                name: "Dr. Sarah Johnson",
                role: "Chief Surgeon",
                specialty: "Cardiothoracic Surgery",
                experience: "20 years",
                bio: "Dr. Johnson leads our surgical team with expertise in complex heart and lung procedures, dedicated to patient recovery and innovation.",
                image: "Dr. Sarah Johnson.jpg"
            },
            {
                name: "Dr. Michael Chen",
                role: "Pediatrician",
                specialty: "Child Healthcare",
                experience: "15 years",
                bio: "Dr. Chen specializes in pediatric care, ensuring the health and well-being of children with a compassionate approach.",
                image: "Dr. Michael Chen.jpg"
            },
            {
                name: "Nurse Emily Davis",
                role: "Head Nurse",
                specialty: "Critical Care",
                experience: "12 years",
                bio: "Emily oversees our nursing staff, providing exceptional care in high-pressure environments with a focus on patient comfort.",
                image: "Nurse Emily Davis.jpg"
            },
            {
                name: "Dr. Robert Wilson",
                role: "Neurologist",
                specialty: "Brain and Spine Disorders",
                experience: "18 years",
                bio: "Dr. Wilson is an expert in neurological disorders, advancing treatments for conditions affecting the brain and spine.",
                image: "Dr. Robert Wilson.jpg"
            },
            {
                name: "Dr. Lisa Patel",
                role: "Oncologist",
                specialty: "Cancer Treatment",
                experience: "14 years",
                bio: "Dr. Patel is dedicated to cancer care, offering personalized treatment plans and support for patients and families.",
                image: "Dr. Lisa Patel.jpg"
            },
            {
                name: "Nurse James Carter",
                role: "Emergency Nurse",
                specialty: "Trauma Care",
                experience: "10 years",
                bio: "James excels in emergency settings, providing rapid and effective care to patients in critical conditions.",
                image: "  Nurse James Carter.jpg "
            },
            {
                name: "Dr. Anna Rodriguez",
                role: "Orthopedic Surgeon",
                specialty: "Joint Replacement",
                experience: "16 years",
                bio: "Dr. Rodriguez specializes in orthopedic surgery, helping patients regain mobility through advanced joint replacement techniques.",
                image: "Dr. Anna Rodriguez.jpg"
            },
            {
                name: "Dr. Thomas Lee",
                role: "Radiologist",
                specialty: "Diagnostic Imaging",
                experience: "13 years",
                bio: "Dr. Lee provides precise diagnostic imaging, aiding in accurate diagnoses with cutting-edge radiology techniques.",
                image: "Dr. Thomas Lee.jpg"
            }
        ];

        // Function to render staff cards
        function renderStaff() {
            const staffGrid = document.getElementById('staffGrid');
            staffGrid.innerHTML = '';

            staffMembers.forEach(member => {
                const card = document.createElement('div');
                card.className = 'staff-card';
                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <div class="staff-info">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                        <p class="specialty">${member.specialty}</p>
                        <p class="experience">Experience: ${member.experience}</p>
                        <p class="bio">${member.bio}</p>
                    </div>
                `;
                staffGrid.appendChild(card);
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', renderStaff);