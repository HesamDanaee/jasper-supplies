import Button from "@/components/common/Button";
import List from "@/components/common/List";
import Typography from "@/components/common/Typography";
import { motion } from "motion/react";
import { useState } from "react";

interface LanguageProps {
  trigger: string;
  options: {
    name: string;
    id: string;
  }[];
}

export default function Language({ trigger, options }: LanguageProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      className="relative"
    >
      <Button
        variant="contained"
        color="primary"
        className="w-auto h-auto bg-primary !p-3"
      >
        <Typography
          variant="body1"
          fontWeight="medium"
          className="max-md:text-sm capitalize"
          color="text-snow"
        >
          {trigger}
        </Typography>
      </Button>

      <List
        className="w-full absolute botom-0 left-0 right-0 translate-y-2 flex-col"
        list={options}
        callback={({ id, name }, z) => (
          <motion.div
            className="text-center py-4 bg-silver cursor-pointer"
            key={id}
            initial={{
              opacity: open ? 1 : 0,
            }}
            animate={{
              opacity: open ? 1 : 0,
              transition: {
                delay: (z + 1) * 0.1,
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="medium"
              className="max-md:text-sm capitalize"
              color="text-snow"
            >
              {name}
            </Typography>
          </motion.div>
        )}
      />
    </motion.div>
  );
}
