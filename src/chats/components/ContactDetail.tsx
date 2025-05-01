import { useParams } from 'react-router';
import { ContactInfo } from './contact-details/ContactInfo';
import { ContactInfoSkeleton } from './contact-details/ContactInfoSkeleton';
import { NoContactSelected } from './contact-details/NoContactSelected';
import { useQuery } from '@tanstack/react-query';
import { getClient } from '../fake/fake-data';

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => getClient(clientId ?? ''),
    enabled: !!clientId,
  });

  if (!clientId) {
    return <NoContactSelected />;
  }

  if (isLoading && !client) {
    return <ContactInfoSkeleton />;
  }

  if (client) {
    return <ContactInfo client={client} />;
  }

  return <h2>Cliente no encontrado</h2>;
};
