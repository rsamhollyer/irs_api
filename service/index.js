const prisma = require('../config/client');

console.log(prisma);
// This will attempt to create a link between the instructions and the forms
async function foreignKeyUpdate() {
  const forms = await prisma.taxForm.findMany();
  console.log(forms);
}

foreignKeyUpdate()
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    console.log('😈 ALL DONE!');
    prisma.$disconnect();
    process.exit(1);
  });
