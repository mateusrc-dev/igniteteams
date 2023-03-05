import { SafeAreaView } from "react-native-safe-area-context" // 'SaveAreaView' serves to leave the elements in a safe area
import styled from "styled-components/native"; // for stilizing elements for mobile context

export const Container = styled(SafeAreaView)` 
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
