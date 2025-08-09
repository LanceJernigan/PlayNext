import Image from 'next/image';
import { useSuspenseQuery } from "@apollo/client";
import getUserQuery from "@/queries/user/getUser";
import { User } from "@/app/api/graphql/resolvers/user/types";
import styles from "./profileOverview.module.css";

export default function ProfileOverview() {
    const { data }: { data: { user: User } } = useSuspenseQuery(getUserQuery);

    return (
        <section className={styles.wrapper}>
            <Image
                src={data.user.avatarfull}
                alt={`${data.user.personaname}'s profile image`}
                width={75}
                height={75}
                className={styles.image}
            />
            <h3 className={styles.username}>{data.user.personaname}</h3>
        </section>
    )
}