import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCall } from "@/components/table/TableCall";
import { NavbarAdmin } from "@/components/NavbarAdmin";
import { withAuth } from "@/lib/authorization";
import { useContext } from "react";
import { AuthContext } from "@/lib/authorization";

function Call() {
  const userData = useContext(AuthContext);
  return (
    <>
      <HeadAdmin />
      <NavbarAdmin />
      <main>
        <Container maxW="80%">
          <Heading marginBottom="8" marginTop="8">
            Panggilan Darurat{" "}
            {userData && userData.rows[0].type == 1
              ? "Rumah Sakit"
              : userData && userData.rows[0].type == 2
              ? "Polisi"
              : userData && userData.rows[0].type == 3
              ? "Pemadam Kebakaran"
              : ""}
          </Heading>
          <TableCall />
        </Container>
      </main>
    </>
  );
}

export default withAuth(Call);
