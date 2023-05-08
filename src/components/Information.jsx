import React from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Information = () => {
  return (
    <div>
      <section>
        <Container className="py-5 mt-2">
          <Tabs>
            <TabList>
              <Tab>DESCRIPTION</Tab>
              <Tab>ADDITIONAL&nbsp;INFORMATION</Tab>
              <Tab>REVIEWS&nbsp;(1)</Tab>
            </TabList>

            <TabPanel>
              <h5 className="fw_400 fs_20 ff_poppins clr_black opacity_70 lh_37">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium
                suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse
                imperdiet lorem eleifend nisi euismod, vel consequat ipsum
                luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus
                tortor. Pellentesque non pharetra mi. Cura{" "}
              </h5>
            </TabPanel>
            <TabPanel>
              <h5 className="fw_400 fs_20 ff_poppins clr_black opacity_70 lh_37">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis porro, aliquam possimus ratione laudantium voluptate
                voluptatum minima iste? Sapiente sunt id doloremque nostrum
                commodi quibusdam adipisci, voluptatum quidem! Rerum atque
                laborum in deserunt aspernatur est consequuntur eaque ipsam
                itaque. Nemo nisi perspiciatis voluptates amet aperiam possimus
                quidem officia eum vero impedit ipsa dignissimos commodi
                voluptas explicabo itaque atque, autem cum, minima sapiente
                error? Voluptatibus praesentium saepe officiis nihil eum
                perspiciatis nulla molestiae magni. Saepe officiis, quos fugit
                impedit repudiandae eligendi voluptatem, ex illum iste molestias
                cupiditate debitis dolores facere autem, nulla ea nisi ab!
                Repudiandae soluta animi rem voluptate tenetur!
              </h5>
            </TabPanel>
            <TabPanel>
              <h5 className="fw_400 fs_20 ff_poppins clr_black opacity_70 lh_37">
                {" "}
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium
                suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse
                imperdiet lorem eleifend nisi euismod, vel consequat ipsum
                luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus
                tortor. Pellentesque non pharetra mi. Cura{" "}
              </h5>
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default Information;
